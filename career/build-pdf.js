// Renders the CVs and the LinkedIn guide to PDF.
//
//   npx playwright install chromium     (once)
//   node career/build-pdf.js
//
// Text stays selectable, which is what ATS parsers need — never export a CV
// as an image.

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
const { pathToFileURL } = require("url");

const TEMPLATES = path.join(__dirname, "templates");
const OUT = path.join(__dirname, "pdf");

const DOCS = [
  ["cv-es.html", "David-Cardona-Martinez-Desarrollador-Full-Stack.pdf", true],
  ["cv-en.html", "David-Cardona-Martinez-Full-Stack-Developer.pdf", true],
  ["linkedin-guide.html", "Guia-LinkedIn-David-Cardona.pdf", false],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const [template, filename, isCv] of DOCS) {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(path.join(TEMPLATES, template)).href, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(600); // let the self-hosted fonts settle

    const file = path.join(OUT, filename);
    await page.pdf({
      path: file,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    // A CV that spills onto a second page gets skimmed, not read.
    const pages = (fs.readFileSync(file).toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
    const kb = Math.round(fs.statSync(file).size / 1024);
    const warn = isCv && pages > 1 ? "  ← CV over one page, trim it" : "";
    console.log(`${filename}  ${pages} page(s), ${kb} KB${warn}`);

    await page.close();
  }

  await browser.close();
})();

const puppeteer = require('puppeteer')
const prompts = require('prompts')

async function getScreenshotFromUrl(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(url)
  await page.screenshot({path: './snapshot.png', fullPage: true})

  await browser.close()
}


(async () => {
  const response = await prompts({
    type: 'text',
    name: 'url',
    message: 'Which url do you want to take a snapshot for?'
  })

  getScreenshotFromUrl(response.url).then(() => console.log('Taking snapshot succeeded !')).catch(console.log)
})().catch(console.log)
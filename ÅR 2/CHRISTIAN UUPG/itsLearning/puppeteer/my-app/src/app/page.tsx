import DisplayerComponent from '@/components/Show';
import React from 'react'
const puppeteer = require('puppeteer');

export default async function Home() {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.foreca.com/sv/100656130/Jakobstad-Finland');

  const headings = await page.evaluate(() => Array.from(document.querySelectorAll('h1'), element => element.textContent));
  const text = await page.evaluate(() => Array.from(document.querySelectorAll('.row'), element => element.textContent));

  await browser.close();

  return (
    <div>
      <DisplayerComponent headings={headings} text={text} />
    </div>
  )
}
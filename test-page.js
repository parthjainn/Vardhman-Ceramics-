import puppeteer from 'puppeteer';
import { exec } from 'child_process';

const server = exec('npm run preview');

setTimeout(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });
  
  await browser.close();
  server.kill();
}, 3000);

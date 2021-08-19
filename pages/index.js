import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div class="flex flex-col justify-center items-center h-screen font-sans">
      <Head>
        <title>COVIDPass</title>
        <meta name="description" content="Generate your Apple Wallet EU COVID Pass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="bg-gray-50 font-bold rounded-lg border shadow-lg p-10 text-center">
        <h1 class="text-4xl text-blue-500 font-medium">
          <a href="https://ec.europa.eu/info/live-work-travel-eu/coronavirus-response/safe-covid-19-vaccines-europeans/eu-digital-covid-certificate_en" target="_blank">EU Digital COVID Certificate</a>
        </h1>

        <p class="font-normal mt-5">
          Add your EU Digital COVID Certificate to Apple Wallet.<br/>
          This website stores no data whatsoever and it's source code is <a class="text-blue-500 hover:underline" href="https://github.com/jernejstrasner/covidpass" target="_blank">publicly available</a>.
        </p>
      </main>

    </div>
  )
}

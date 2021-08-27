import Head from 'next/head'
import Camera from '../components/camera'
import dynamic from 'next/dynamic';
const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export default function Home() {
  async function handleScan(scan) {
    if (scan) {
      console.log(scan)
    }
  }

  return (
    <div class="flex flex-col justify-center items-center h-screen font-sans">
      <Head>
        <title>COVIDPass</title>
        <meta name="description" content="Generate your Apple Wallet EU COVID Pass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:bg-gray-50 font-bold md:rounded-lg md:border md:shadow-lg p-5 md:p-10 text-center">
        <h1 className="text-2xl text-blue-500 font-medium md:text-4xl">
          <a href="https://ec.europa.eu/info/live-work-travel-eu/coronavirus-response/safe-covid-19-vaccines-europeans/eu-digital-covid-certificate_en" target="_blank">EU Digital COVID Certificate</a>
        </h1>

        <p className="font-normal mt-5 text-sm md:text-md">
          Add your EU Digital COVID Certificate to Apple Wallet.
          This website stores no data whatsoever and it's source code is <a className="text-blue-500 hover:underline" href="https://github.com/jernejstrasner/covidpass" target="_blank">publicly available</a>.
        </p>

        <Camera
          handleScan={handleScan}
        />

        <button className="bg-blue-500 rounded-md p-3 mt-6 text-white font-medium text-sm">
          Download Wallet Pass
        </button>
      </main>

    </div>
  )
}

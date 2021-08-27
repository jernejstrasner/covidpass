import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export default function Camera(props) {

    const [cameraError, setCameraError] = useState(null)

    if (cameraError) {
        return (
            <div className="p-5 rounded-md m-3 border-gray-400 bg-red-300">
                <p className="font-bold text-red-800">Camera error</p>
                <p className="font-medium">Are you using a device with a working camera?</p>
            </div>
        )
    }

    return (
        <div class="mt-5 max-w-md">
            <QrReader
                delay={0}
                onError={setCameraError}
                onScan={props.handleScan}
                style={{ width: '100%' }}
            />
        </div>
    )
}
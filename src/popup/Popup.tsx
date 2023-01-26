import React, { useState } from 'react'

function Popup() {
    const [value, setValue] = useState<string>('');

    const handleSave = () => {
        chrome.storage.local.set({ key: value }, () => {
            console.log('Value is set to ' + value);
        });
    }

    const handleLoad = () => {
        chrome.storage.local.get(['key'], (result) => {
            console.log('Value currently is ' + result.key);
            setValue(result.key);
        });
    }

    return (
        <div className='w-72'>
            <div className='p-4'>
                <h1 className='text-base mb-4 font-medium'>Chrome Extension with ReactJs</h1>

                <div className='mb-10'>
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className="bg-gray-50 border border-gray-200 w-full rounded-lg px-4 py-2 text-black focus:outline-none mb-5" />

                    <div className='flex items-center justify-end'>
                        <button onClick={handleSave} className="bg-green-500 hover:bg-green-400 transition duration-300 px-6 py-2 rounded-md text-white text-center">
                            <span>Save</span>
                        </button>
                    </div>
                </div>

                <div className=''>
                    <p className='text-sm mb-2'>Local Storage value</p>
                    <div className='flex items-center space-x-2'>
                        <button onClick={handleLoad} className="bg-orange-500 hover:bg-orange-400 transition duration-300 px-6 py-2 rounded-md text-white text-center">Load</button>
                        <span className='text-lg font-semibold'>{value}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
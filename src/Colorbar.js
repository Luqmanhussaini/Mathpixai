import React from 'react'

export default function Colorbar() {
    return (
        <div className='boxx'>
            <div class="d-flex flex-row ">
                {/* ------------1--------- */}
                <div class="p-2">
                    <div class="d-flex flex-column text-box">
                        <div className="p-2 ml">
                        <div class="fs-- popp" ><b>High-volume document conversion and OCR service</b></div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex flex-row mb-3">
                                <div class="p-2 disp">
                                    <div className='count'> <b>2M+</b></div>
                                    <div className='fs-5'><b>Users Globally</b></div>
                                </div>

                                <div class="p-2 disp">
                                    <div className='count'><b>20M+</b></div>
                                    <div className='fs-5'><b>PDFs Converted</b></div>
                                </div>
                                <div class="p-2 disp">
                                    <div className='count'><b>2.5B+</b></div>
                                    <div className='fs-5'><b>Images Converted</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ----------------2--------- */}
                <div class="p-2"><img src="https://mathpix.com/images/snip-page/banner-mark1.svg" alt="" /></div>
            </div>

        </div>
    )
}

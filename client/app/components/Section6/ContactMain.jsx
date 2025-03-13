import React from 'react'

const ContactMain = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-12 mt-12 mb-12 items-center justify-center'>
        <div className='flex flex-col lg:w-[620px] items-center justify-center'>
        <div className="flex flex-col gap-6">
            {/* Telefon */}
            <div className="flex items-center gap-6">
                {/* GIF için .gif uzantılı bir dosya kullanabilirsiniz. */}
                <img 
                src="https://s3-alpha-sig.figma.com/img/ce62/a04b/57a06fc49b102b0e871cb3ac38cd0287?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pgFsBEQDKz0atpV1SXuC9zYGeDzbL9ng5DchqgPXmKPCATI7HKy39GQciiQ8RyTEfbVNyTWo3VBS9ZCID-3ihKlM5NAVX1b0LxE0oC4DVac5tkQ6w4RKYWsfJmt5kGWHdkdOScu0p3c-FM3GuUTeRDk5f4Bi5aLjak4HMq6nB7rnkL-L45lIvmKcQkfM9xEOC21SVjYr3h2PP6WQZWeYblCS4aZ5uleqFnqsbtwkahnyHoUL8tdWjkudNGaUBHr10scmo1bFLfuiVT7xtC94EFz2SJB~H36ZWYIT~qU8qqK~60YsYlgeLal9ckQ6TbKDzepa56CJPtncMn0FtjC1Sw__" 
                alt="Phone GIF" 
                className="w-10 h-10" 
                />
                <div className="flex flex-col">
                <span className="text-[#140f25] text-base font-normal font-['Inter'] leading-snug text-start">
                    Call Now
                </span>
                <p className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                    0 532 645 17 67
                </p>
                </div>
            </div>

            {/* E-Posta */}
            <div className="flex items-center gap-6">
                <img 
                src="https://s3-alpha-sig.figma.com/img/9d3f/a0e3/da597f3ba21d3a47c7c2d573e288ad6c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XalWRyGySCcLhysHXzag2euHKe9XJLJ2ECvGamNo4K3vDChc~TdtBQ6PGohfMop7LnxFaQoLXJz3gkXOXb5fadDpCCAmjHHwzORuWuAifG7XVNtL0nMP2BfWvbscwdFGujN6DIL9jdYxgnWOttCN5Mv0iRVmkTUIho-4fmmfs-64qUjLAq98AjFj5hjrHXCVxu0LQGHfwIVhrDzT~6UR9EcKKpJ4ILVsUYbZBJ-FFDsDIH8cfNgVqFHqSjcEsjC-f9wC4g0M7MWO4PxrRb2n9eyTIEslN4jgVK0oSUZAebz655f0BhooRCC7UdtJyoPhb1vvRmt9z5W72dT-TB4k4g__" 
                alt="Email GIF" 
                className="w-10 h-10" 
                />
                <div className="flex flex-col">
                <span className="text-[#140f25] text-base font-normal font-['Inter'] leading-snug text-start">
                    E - Mail
                </span>
                <p className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                    info@dgtlface.com
                </p>
                </div>
            </div>

            {/* Konum */}
            <div className="flex items-center gap-6">
                <img 
                src="https://s3-alpha-sig.figma.com/img/435a/2ee0/f77d58e8d2dd5ed5bef41401efa03976?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QFovSKld-GWFBNdvGWhrEiAEi5W4-nA7kC5pAOGIJNMm27TpsiPmZH8Pxzd4PfbDqlVaRClErRrjlDoOMdnKlV2ZEjRdh6~m7VUsTYu1R~k-HApDeZafEqIzHQBGfWEIGVbHu51R4MWmra1FYgFnNAbuu4HaWPGPRYorI~CyTtAu286A-xrNLZk0y9RWfrVOpX0ta2HAU2rFhQGb~CC0Y9k6dUb1p8h4ut9DqKoFa4B5YMplbaL-zJGIaKYe~ijzBzqVDBnzvBx3HOaK2tUD7aebRsa9dOyCtv8Y0f3n0gTqOi5ZYYXDl2gquhrKp9NOKDDzjnagB~VInWx5i7k27g__" 
                alt="Location GIF" 
                className="w-10 h-10" 
                />
                <div className="flex flex-col">
                <span className="text-[#140f25] text-base font-normal font-['Inter'] leading-snug text-start">
                    Location
                </span>
                <p className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                    Muratpaşa / Antalya
                </p>
                </div>
            </div>
        </div>
        </div>
        <div>
            
            <div className="w-[620px] p-12 bg-white rounded-[25px] shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-center gap-12">
                <div className="relative justify-start text-[#140f25] text-[32px] font-bold font-['Inter'] leading-[38.40px]">Send Message</div>
                <div className="flex flex-col justify-start items-start gap-4">
                    <div className="inline-flex justify-start items-center gap-5">
                        <div className="relative justify-start text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">Hello! My name is</div>
                        <div className="pl-5 rounded-[50px] flex justify-center items-center gap-2.5">
                            <div className="relative justify-start text-[#a754cf] text-2xl font-medium font-['Inter'] leading-[28.80px]">.....................</div>
                            <div className="relative justify-start text-[#a754cf] text-2xl font-medium font-['Inter'] leading-[28.80px]">.....................</div>
                        </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-5">
                        <div className="relative justify-start text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">I work at</div>
                        <div className="rounded-[50px] flex justify-center items-center gap-2.5">
                            <div className="relative justify-start text-[#a754cf] text-2xl font-medium font-['Inter'] leading-[28.80px]">...........................................</div>
                        </div>
                        <div className="relative justify-start text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">company.</div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-5">
                        <div className="relative justify-start text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">I want you to do a project for us;</div>
                        <div className="relative justify-start text-[#a754cf] text-2xl font-medium font-['Inter'] leading-[28.80px]">......................</div>
                    </div>
                    <div className="w-[513px] h-6 relative justify-end text-[#a754cf] text-2xl font-medium font-['Inter'] leading-[28.80px]">.................................................................................</div>
                    <div className="inline-flex justify-start items-center gap-5">
                        <div className="relative justify-start text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">for communication</div>
                        <div className="relative justify-start text-[#a754cf] text-2xl font-medium font-['Inter'] leading-[28.80px]">+..... ( ...... ) ........  ..... .....</div>
                        <div className="relative justify-start text-black text-3xl font-medium font-['SF_Pro_Display'] leading-[45px]">,</div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-5">
                    <div className="relative justify-start bg-gradient-to-r from-[#54b9cf] to-[#a754cf] bg-clip-text text-transparent text-2xl font-medium font-['Inter'] leading-[28.80px]">
                    .................@example.com
                    </div>

                        <div className="relative justify-start text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">In addition,</div>
                        <div className="relative justify-start text-[#a754cf] text-2xl font-medium font-['Inter'] leading-[28.80px]">...........</div>
                    </div>
                    <div className="w-[513px] h-6 relative justify-end text-[#a754cf] text-2xl font-medium font-['Inter'] leading-[28.80px]">.................................................................................</div>
                    <div className="relative justify-start text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">We thank you.</div>
                </div>
                <div className="px-8 py-4 rounded-[14px] border-2 border-[#54b9cf] inline-flex justify-center items-center gap-2.5">
                    <div className="relative justify-start text-[#140f25] text-sm font-bold font-['Inter'] leading-[16.80px]">Send</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMain
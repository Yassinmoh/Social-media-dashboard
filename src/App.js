import './App.css';
import {useState} from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
function App() {

  const [darkmode,setDarkMode]=useState(false)
const handelChangeCheck=(e)=>{
  setDarkMode(e.target.checked);
}

  return (
    <div className={darkmode && "dark"}>
      <div className="text-slate-400 pb-8 dark:bg-darkbg-dark dark:text-slate-300">
        {/* Header */}
        <div className="bg-bg pb-40 dark:bg-darkbg">
          <div className="container py-9 flex justify-between items-center">
            <div>
              <h1 className="text-slate-800 dark:text-white text-bold text-3xl">Social Media Dashboard</h1>
              <span className="text-sm">Total Followers :16.6589</span>
            </div>
            <div>
              <label className="mr-2" htmlFor="checkbox">Dark Mode</label>
              <span>
                <input type="checkbox" id="checkbox" onChange={handelChangeCheck}/>
              </span>
            </div>
          </div>
        </div>
        <div className="container -mt-40">
          {/* Main Cards */}
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:gap-8">
            {/* Card */}
            <div className="card before:bg-sky-500 ">
              <div className="flex items-center justify-center gap-1 pb-6">
                <span className="text-facebook">
                  <AiFillFacebook size={22} />
                </span>
                <span>@yassin</span>
              </div>
              <h2 className="text-slate-800 dark:text-white text-6xl font-bold ">1754</h2>
              <p className="font-medium uppercase tracking-[0.3em]	">Followers</p>
              <div className="flex items-center justify-center gap-1 pt-6 text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            <div className="card before:bg-twitter">
              <div className="flex items-center justify-center gap-1 pb-6">
                <span className="text-twitter">
                  <AiFillTwitterSquare size={22} />
                </span>
                <span>@yassin</span>
              </div>
              <h2 className="text-slate-800 dark:text-white text-6xl font-bold ">2698</h2>
              <p className="font-medium uppercase tracking-[0.3em]	">Followers</p>
              <div className="flex items-center justify-center gap-1 pt-6 text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            <div className="card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500">
              <div className="flex items-center justify-center gap-1 pb-6">
                <span className="text-orange-600">
                  <AiFillInstagram size={22} />
                </span>
                <span>@yassin</span>
              </div>
              <h2 className="text-slate-800 dark:text-white text-6xl font-bold ">11K</h2>
              <p className="font-medium uppercase tracking-[0.3em]	">Followers</p>
              <div className="flex items-center justify-center gap-1 pt-6 text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            <div className="card before:bg-rose-700 ">
              <div className="flex items-center justify-center gap-1 pb-6">
                <span className="text-rose-700">
                  <AiFillYoutube size={22} />
                </span>
                <span>@yassin</span>
              </div>
              <h2 className="text-slate-800 dark:text-white text-6xl font-bold ">879</h2>
              <p className="font-medium uppercase tracking-[0.3em]	">Subscribe</p>
              <div className="flex items-center justify-center gap-1 pt-6 text-rose-700">
                <span>
                  <RiArrowDownSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
          </div>
          {/* Small Card */}
          <div className="mt-12">
            <h2 className="text-2x1 font-bold">Overview - Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 ">
              {
                Array(8)
                  .fill(" ")
                  .map((el) => (
                    <div className="card-sm" key={Math.random()}>
                      <div className=" flex items-center justify-between">
                        <h4 className="font-bold">Pages View</h4>
                        <AiFillFacebook size={22} className="text-facebook" />
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <h3 className="font-block text-2x1 text-slate-800 dark:text-white">101</h3>
                        <div className="flex items-center gap-1 text-maingreen text-sm">
                          <span>
                            <RiArrowUpSFill />
                          </span>
                          <span>300%</span>
                        </div>
                      </div>
                    </div>
                  ))
              }
              {/* Card */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

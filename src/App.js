import './App.css';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
function App() {
  return (
    <div className="text-slate-400">
      {/* Header */}
      <div className="bg-bg">
        <div className="container py-9 flex justify-between items-center">
          <div>
            <h1 className="text-slate-800 text-bold text-3xl">Social Media Dashboard</h1>
            <span className="text-sm">Total Followers :16.6589</span>
          </div>
          <div>
            <label className="mr-2" htmlFor="checkbox">Dark Mode</label>
            <span>
              <input type="checkbox" id="checkbox" />
            </span>
          </div>
        </div>
      </div>
      {/* Main Cards */}
      <div className="container">
        {/* Card */}
        <div className="bg-bg-card text-center py-6 rounded">
          <div>
            <span>
              <AiFillFacebook size={22} />
            </span>
            <span>@yassin</span>
          </div>
          <h2 className="text-slate-800">1995</h2>
          <p>Followers</p>
          <div>
            <span>
              <RiArrowUpSFill />
            </span>
            <span>Today</span>
          </div>
        </div>
      </div>
      {/* Small Card */}
      <div >
        <h2>Overview - Today</h2>
        <div>
          {/* Card */}
          <div>
            <div>
              <h4>Pages View</h4>
              <AiFillFacebook size={22} />
            </div>
            <h3>101</h3>
            <div>
              <span>
                <RiArrowUpSFill />
              </span>
              <span>300%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

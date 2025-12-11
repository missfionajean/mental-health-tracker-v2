// this will hold the logic for the calendar itself
// make sure to properly lift states so that the components can affect each other
// re-render calendar only when an update happens (put in logic to not do anything if no changes are made and submit is clicked)
// make sure there's also loading states and progress trackers (spinning wheel, progress bar, etc.) for when API calls are made

import "./Calendar.css"

export default function Calendar() {
    return (
        <>
            <h1>Calendar</h1>
            <div className="navigate-date">
                {/* placeholder data will be updated to fill dynamically */}
                <h2 className="month">December</h2>
                <h2 className="year">2025</h2>
                <div className="buttons">
                    <button>⬅</button>
                    <button>⮕</button>
                </div>
            </div>
            <div className="weekdays">
                <span className="weekday">Sun</span>
                <span className="weekday">Mon</span>
                <span className="weekday">Tue</span>
                <span className="weekday">Wed</span>
                <span className="weekday">Thu</span>
                <span className="weekday">Fri</span>
                <span className="weekday">Sat</span>
            </div>
            <div className="days">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
            </div>
        </>
    );
}
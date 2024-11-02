import {
  FC,
  SetStateAction,
  useRef,
  useState,
  useEffect,
  CSSProperties,
} from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import styles from "./SideBarEmil.module.css";
import "./App.css";

const queries = {
  batting: [
    "highest batting average",
    "fastest century",
    "most sixes",
    "highest strike rate",
    "longest partnership",
    "highest individual score",
    "most runs season",
    "highest win percentage",
    "most man-of-the-match",
  ],
  bowling: [
    "most wickets",
    "best economy rate",
    "lowest team total",
    "best bowling figures",
    "most hat-tricks",
    "most matches won",
    "most sixes innings",
    "most catches",
  ],
};

function DropDown({ tab }: { tab: string }) {
  const [open, setOpen] = useState(false);
  const [searchedQuery, setSearchedQuery] = useState("");
  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  // const handleQueries = (value) => {
  //   if (!selectedQueries.find((selectedQuery) => selectedQuery == value))
  //     setSelectedQueries([...selectedQueries, value]);
  //   handleOpen();
  // };
  const handleChange = (e: any) => {
    e.target.value == "" ? setOpen(false) : setOpen(true);
    setSearchedQuery(e.target.value.toLowerCase());
  };
  // const handleRemoveQuery = (value) => {
  //   const temp = selectedQueries;
  //   temp.splice(temp.indexOf(value), 1);
  //   setSelectedQueries([...temp]);
  // };
  return (
    // <div className="container">
    //   <div className="card">
    //     <div className="item-1">
    <div>
      {/* <div className="info">
              <Info /> Select atleast one query, you can add more or edit later.
            </div> */}
      <div className="inputContainer">
        <input
          type="text"
          id="inputBox"
          placeholder="Typing.."
          autoComplete="off"
          onChange={handleChange}
        />
        <label htmlFor="inputBox">
          Start typing to search queries (100+ available)
        </label>
        <button
          style={{ rotate: open ? "0deg" : "180deg" }}
          onClick={handleOpen}
          className="dropdown"
        >
          <OptionsButton />
        </button>
        {open && (
          <div className="options">
            {queries[tab]
              .filter((query) =>
                searchedQuery == ""
                  ? true
                  : query.slice(0, searchedQuery.length) == searchedQuery
              )
              .map((filteredQuery) => (
                <button
                  // value={filteredQuery}
                  key={filteredQuery}
                  onClick={() => console.log("clicked")}
                  className="query"
                >
                  {filteredQuery}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default function () {
  const mockData = {
    most_wickets: [
      {
        "4W": "4w",
        "5W": "5w",
        Avg: "Avg",
        Eco: "Econ",
        Inns: "Inns",
        Matches: "Mat",
        Overs: "Ov",
        Player: "Player",
        Runs: "Runs",
        SR: "SR",
        Wickets: "Wkts",
      },
      {
        "4W": "1",
        "5W": "1",
        Avg: "12.09",
        Eco: "6.46",
        Inns: "11",
        Matches: "11",
        Overs: "41.1",
        Player: "Sohail Tanvir",
        Runs: "266",
        SR: "11.22",
        Wickets: "22",
      },
      {
        "4W": "0",
        "5W": "0",
        Avg: "21.26",
        Eco: "7.76",
        Inns: "15",
        Matches: "15",
        Overs: "52.0",
        Player: "Shane Warne",
        Runs: "404",
        SR: "16.42",
        Wickets: "19",
      },
      {
        "4W": "0",
        "5W": "0",
        Avg: "23.26",
        Eco: "8.63",
        Inns: "15",
        Matches: "15",
        Overs: "51.1",
        Player: "Shanthakumaran Sreesanth",
        Runs: "442",
        SR: "16.15",
        Wickets: "19",
      },
      {
        "4W": "0",
        "5W": "0",
        Avg: "22.52",
        Eco: "7.07",
        Inns: "15",
        Matches: "15",
        Overs: "54.1",
        Player: "Shane Watson",
        Runs: "383",
        SR: "19.11",
        Wickets: "17",
      },
      {
        "4W": "0",
        "5W": "0",
        Avg: "26.05",
        Eco: "7.38",
        Inns: "16",
        Matches: "16",
        Overs: "60.0",
        Player: "Manpreet Gony",
        Runs: "443",
        SR: "21.17",
        Wickets: "17",
      },
    ],
  };
  return (
    <>
      <div className="container">
        <table cellPadding="14px 18px" cellSpacing={0}>
          <thead>
            <tr>
              {Object.keys(mockData["most_wickets"][0]).map((eachAttribute) => (
                <th align="left">{eachAttribute}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockData["most_wickets"].map((eachPlayer, i) => (
              <tr
                style={{ backgroundColor: i % 2 == 0 ? "inherit" : "#F4F4F5" }}
              >
                {Object.values(eachPlayer).map((eachCellData) => (
                  <td>{eachCellData}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SideBarEmil />
    </>
  );
}

export function OptionsButton() {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ArrowDropDownIcon"
      width="24"
      height="24"
    >
      <path d="M7 10l5 5 5-5z" fillOpacity="0.5" fill="black" />
    </svg>
  );
}
export function Info() {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-1cw4hi4"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="InfoOutlinedIcon"
      width="24"
      height="24"
    >
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
        fill="#29B6F6"
      />
    </svg>
  );
}
export function SideBarEmil({}: {}) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("batting"); //fundamentals
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ type: "linear" }}
            className={styles.sideBar}
          >
            <div className={styles.tabsContainer}>
              {Object.keys({ batting: [], bowling: [] }).map((tabName) => (
                <Tab tab={tab} setTab={setTab}>
                  {tabName}
                </Tab>
              ))}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                className={styles.contents}
                initial={{
                  opacity: 1,
                  x: tab == "batting" ? "15%" : "-15%",
                }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{
                  x: tab == "bowling" ? "-15%" : "15%",
                  opacity: 0,
                }}
                transition={{ type: "linear", duration: 0.1 }}
              >
                <DropDown tab={tab} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen((prevState) => !prevState)}
        initial={{ left: "15px", right: "auto" }}
        animate={
          open
            ? {
                left: "29vw",
                rotateZ: "-45deg",
              }
            : {
                left: "15px",
                rotateZ: "0deg",
              }
        }
        className={styles.sideBarButton}
        transition={{ type: "spring", bounce: 0.25 }}
      >
        <AddSVG />
      </motion.button>
    </>
  );
}
function Tab({
  tab,
  setTab,
  children,
}: {
  tab: string;
  setTab: React.Dispatch<SetStateAction<string>>;
  children: string;
}) {
  return (
    <button
      className={styles.tab}
      style={{ fontWeight: tab == children.toLocaleLowerCase() ? 450 : 400 }}
      onClick={() => setTab(children.toLowerCase())}
    >
      {children}
      {tab == children.toLocaleLowerCase() && (
        <motion.div layoutId="background" className={styles.tabBackground} />
      )}
    </button>
  );
}

export function AddSVG({
  color = "#171717",
  width = "100%",
  height = "100%",
  style,
}: {
  color?: string;
  height?: string;
  width?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 292.377 292.377"
      xmlSpace="preserve"
      style={{ borderRadius: "50%", ...style }}
    >
      <g>
        <path
          fill={color}
          d="M146.188,0C65.576,0,0,65.582,0,146.188s65.576,146.188,146.188,146.188
		s146.188-65.582,146.188-146.188S226.801,0,146.188,0z M194.962,152.155h-42.806v42.8c0,3.3-2.667,5.967-5.967,5.967
		c-3.3,0-5.967-2.667-5.967-5.967v-42.8H97.415c-3.294,0-5.967-2.673-5.967-5.967s2.673-5.967,5.967-5.967h42.806V97.415
		c0-3.294,2.667-5.967,5.967-5.967c3.3,0,5.967,2.673,5.967,5.967v42.806h42.806c3.3,0,5.967,2.673,5.967,5.967
		S198.261,152.155,194.962,152.155z"
        />
      </g>
    </svg>
  );
}

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, TextField, Select, MenuItem, InputLabel, FormControl, colors } from "@mui/material";
import getResults from "../util";
import { useNavigate } from "react-router-dom";
import backgroundImage from './slashwall.jpeg';

const thickerBorders = {
  borderWidth: '2px', // You can adjust this value to make the borders thicker
  borderStyle: 'solid',
};
/**
 * Takes in input from user about the product they would like to see the prices for and routes the request to Results page
 * @returns
 */
function Menu() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
  
    const fetchData = async () => {
      try {
        const response = await fetch('/results', {
          signal: abortController.signal, // Pass the abort signal
        });
        const data = await response.json();
        if (!abortController.signal.aborted) {
          setData(data);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(error);
        }
      }
    };
  
    fetchData();
  
    return () => {
      abortController.abort(); // Cancel the request when unmounting
    };
  }, []);
  
  const navigate = useNavigate();

  const fetchResults = async () => {
    let result = null;
    try {
      result = await getResults(searchWeb, searchItem);
      navigate("/results", { state: { response: result } });
    } catch (error) {
      console.log(error);
    } finally {
      setButton("Fetched");
    }

    //props.getResult(response);
  };

  const handleSubmission = () => {
    setButton("Fetching");
    fetchResults();
  };

  const [button, setButton] = useState("Default");
  const [searchItem, setSearchItem] = useState(undefined);
  const [searchWeb, setSearchWeb] = useState(undefined);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',


    }}>
      <div style={{ display: "flex", marginLeft: "1vw", marginTop: "2vh" }}>
        {button === "Default" ? (
          <Stack direction="column" alignItems="center" spacing={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              onChange={(e) => setSearchItem(e.target.value)}
              style={thickerBorders}

            />
            <FormControl fullWidth>
              <InputLabel variant="outlined" htmlFor="outlined-basic1">
                Website Name
              </InputLabel>
              <Select
                id="outlined-basic1"
                label="Website Name"
                variant="outlined"
                onChange={(e) => setSearchWeb(e.target.value)}
                style={thickerBorders}
              >
                <MenuItem value="az">Amazon</MenuItem>
                <MenuItem value="wm">Walmart</MenuItem>
                <MenuItem value="eb">Ebay</MenuItem>
                <MenuItem value="cc">Costco</MenuItem>
                <MenuItem value="tg">Target</MenuItem>
                <MenuItem value="bb">BestBuy</MenuItem>
                <MenuItem value="all">All</MenuItem>
              </Select>
            </FormControl>
            <Button size="medium" variant="contained" color="secondary" onClick={handleSubmission} style={thickerBorders}>
              Search Item
            </Button>
          </Stack>
        ) : button === "Fetching" ? (
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
        ) : (
          <div></div>
        )}
      </div>
    </div >
  );
}

export default Menu;

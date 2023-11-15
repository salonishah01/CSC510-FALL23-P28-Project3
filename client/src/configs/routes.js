import React from "react";
import Home from "../components/Home";
import HomeIcon from "@mui/icons-material/Home";
import Form from "../components/Form";
import Menu from "../components/Menu";
import Graphs from "../components/Graphs";
import Results from "../components/Results";
import SummarizeIcon from "@mui/icons-material/Summarize";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import InsightsIcon from "@mui/icons-material/Insights";
import LoginIcon from '@mui/icons-material/Login';
import LogOut from "../components/LogOut";

export const routes = [
  {
    path: "/",
    name: "Menu",
    element: <Menu />,
    icon: <SummarizeIcon />
  },
  {
    path: "/results",
    name: "Results",
    element: <Results />,
    icon: <EqualizerIcon />
  },
  {
    path: "/graphs",
    name: "Graphs",
    element: <Graphs />,
    icon: <InsightsIcon />
  },
  {
    path: "/logout",
    name: "LogOut",
    element: <Form />,
    icon: <LoginIcon />
  },
  {
    path: "/login",
    name: "LogIn",
    element: <Form />,
    icon: <LoginIcon />
  }
];

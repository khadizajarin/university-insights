"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["BENEFITS", "TOP COUNTRIES", "ADMISSION PROCESS", "CONTACT"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="">
      <div >
        <Toolbar disableGutters className="flex justify-between items-center bg-[#213555]">
          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                sx={{
                  color: "#D8C4B6",
                  padding: "0.25rem 1.5rem",
                  fontSize: "1.375rem",
                  borderRight: index !== pages.length - 1 ? "3.5px solid #D8C4B6" : "none",
                  borderRadius: 0,
                }}
                className="tracking-widest"
                style={{ fontWeight: "500" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#D8C4B6" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    sx={{
                      color: "#0B1519",
                      padding: "0.5rem 1rem",
                      textAlign: "center",
                      width: "100%",
                    }}
                    className="tracking-widest text-[#0B1519]"
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box className="lg:hidden text-[#D8C4B6] text-xl font-bold">Study MBBS Abroad</Box>
        </Toolbar>
         
      </div>
    </AppBar>
  );
}

export default Navbar;

import React from "react";

function Header(){

	const headerStyle = {
		height: '115px',
		width: '87%',
		border: '3px solid grey',
		borderRadius: '8px',
		textAlign: 'center'
	}
  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1>ClevrSiteName</h1>
        <h3>a bad site for bad opinions</h3>
      </div>
    </React.Fragment>
  );
}

export default Header;
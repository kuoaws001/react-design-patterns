// HOC

import React, { Component, FC } from "react";

const UserGenderHOC = (gender: string) => (WrappedComponent: any) => {
  return class UserGender extends Component {
    render() {
      return <WrappedComponent gender={gender} {...this.props} />;
    }
  };
};

const BaseComp = ({ gender }) => {
  return <div>{`Gender: ${gender}`}</div>;
};

const Ex5 = () => {
  const Male = UserGenderHOC("orange")(BaseComp);

  return (
    <div>
      <Male />
    </div>
  );
};

export default Ex5;

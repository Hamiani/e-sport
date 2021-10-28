import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOne } from "../../../store/actions/leagues";

import View from "./view";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const leagueQuery = useSelector((state) => state.leagues.getOne);

  useEffect(() => {
    dispatch(getOne(id));
  }, [id, dispatch]);

  return <View leagueQuery={leagueQuery} />;
};

export default Detail;

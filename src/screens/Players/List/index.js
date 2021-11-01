import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { get } from "../../../store/actions/players";
import { PATHS } from "../../../utils/constants";
import View from "./view";

const PLayers = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [page, setPage] = useState(1);
  const onPageChange = setPage;
  const playersQuery = useSelector((state) => state.players.get);

  const onClickTeam = (id) => push(`${PATHS.TEAMS.LIST}/${id}`);

  useEffect(() => {
    dispatch(get({ page, per_page: 5 }));
  }, [dispatch, page]);

  return <View {...{ playersQuery, onPageChange, page, onClickTeam }} />;
};

export default PLayers;

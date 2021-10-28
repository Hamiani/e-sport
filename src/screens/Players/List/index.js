import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get } from "../../../store/actions/players";
import View from "./view";

const PLayers = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const onPageChange = setPage;
  const playersQuery = useSelector((state) => state.players.get);

  useEffect(() => {
    dispatch(get({ page, per_page: 5 }));
  }, [dispatch, page]);

  return <View {...{ playersQuery, onPageChange, page }} />;
};

export default PLayers;

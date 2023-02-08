import React from 'react'
import Heading from './Heading';
import ReservationForm from './ReservationForm';
import { fetchAPI } from './reservationApi'
import { useReducer } from 'react';


export default function Reservation() {

  function updateTimes(date) {
    return (
      fetchAPI(date)
    );
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading head='Reserve a Table' />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
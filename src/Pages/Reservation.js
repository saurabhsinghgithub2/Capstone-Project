import React from 'react'
import Heading from './Heading';
import ReservationForm from './ReservationForm';
import { reservationApi } from './reservationApi'
import { useReducer } from 'react';


export default function Reservation() {

  function updateTimes(date) {
    return (
      reservationApi(date)
    );
  }

  const output = reservationApi(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading head='Table reservation' />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
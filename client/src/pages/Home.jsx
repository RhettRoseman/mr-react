import { useQuery } from '@apollo/client';
import React from 'react';
import './css/home.css'
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

export default function Home(){
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main>
      <div>
    <h2>Welcome to the home page</h2>
      </div>
    </main>
  )
}



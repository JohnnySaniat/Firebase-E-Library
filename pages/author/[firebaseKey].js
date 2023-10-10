/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data

  const getADetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    getADetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>{authorDetails.books?.map((book) => (
      <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getADetails} />
    ))}
    </div>
  );
}

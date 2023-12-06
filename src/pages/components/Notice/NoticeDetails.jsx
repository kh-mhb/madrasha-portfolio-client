import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetSingleNotice from '../../../hooks/notice/useGetSingleNotice';
import Loader from '../shared/Loader';

const NoticeDetails = () => {
  const { id } = useParams();
  const [getSingleNotice, notice, message, isLoading, error] = useGetSingleNotice();
  const [content, setContent] = useState(<Loader />);

  useEffect(() => {
    getSingleNotice(id)
  }, [id, getSingleNotice])

  useEffect(() => {
    if (notice) {
      setContent(
        <div className='overflow-x-hidden break-words px-1 py-4'>
          <h1 className='text-red-500 text-xl lg:text-2xl pb-8'>{notice?.title}</h1>
          <img className='' style={{width:"90%", maxHeight:"70vh",margin:"0 auto"}} src={notice?.file_url} alt="" />
          <div>
            <p>Posted by-{notice?.posted_by}</p>
            {notice?.edited > 0 && <h5>Last edited by-{notice?.edited_by}</h5>}
            <h5>{notice?.edited > 0 ? 'Last edited at: ' : 'Posted at:'}-{notice?.date}</h5>
          </div>
          <h3 className='mt-8'>{notice?.description}</h3>
        </div>
      );
    }
  }, [notice])

  return content
}

export default NoticeDetails;

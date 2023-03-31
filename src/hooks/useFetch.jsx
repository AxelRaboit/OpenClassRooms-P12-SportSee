import { useState, useEffect } from 'react';
import axios from 'axios';
import getMockData from '../assets/mockApi';
import { globalFormat } from '../dataFormat';
import { useParams, useNavigate } from 'react-router-dom';

const USER_URL = 'http://localhost:3000/user/';

/**
 * Retrieve user information
 * @param {Array<Object>} user id
 * @returns {Array<Object>} user information
 */
const getUserInformation = async (id) => {
  const user = await axios.get(`${USER_URL}${id}`);
  const activity = await axios.get(`${USER_URL}${id}/activity`);
  const averageSessions = await axios.get(`${USER_URL}${id}/average-sessions`);
  const performance = await axios.get(`${USER_URL}${id}/performance`);

  return { user, activity, averageSessions, performance };
};

/**
 * Format API response
 * @param {Array<Object>} fetched data from API
 * @returns {Array<Object>} formatted data
 */

const formatApiResponse = (data) => {
  const activitySessions = data.activity.data.data.sessions;
  const performances = data.performance.data.data;
  const user = data.user.data.data;
  const averageSessions = data.averageSessions.data.data.sessions;

  return { activitySessions, performances, user, averageSessions };
};

/**
 * Custom hook to fetch data
 * @returns {Array<Object>}  data, loading, dataSource
 */
export const useFetch = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState('API');

  useEffect(() => {
    setLoading(true);

    getUserInformation(id)
      .then((userInfos) => {
        const formatApi = formatApiResponse(userInfos);
        const formattedData = globalFormat(formatApi);
        setData(formattedData);
        console.log('Using APi Data');
      })
      .catch((e) => {
        if (e.code === 'ERR_NETWORK') {
          const mockData = getMockData(parseInt(id, 10));
          setDataSource('Mock Data');
          console.log('Using Mock Data');

          if (!mockData) {
            navigate('/Error');
          } else {
            const formattedMockData = globalFormat(mockData);
            setData(formattedMockData);
          }
        } else {
          navigate('/Error');
        }
      });

    setLoading(false);
  }, []);

  return { data, loading, dataSource };
}

import { useState, useEffect } from 'react';
import axios from 'axios';
import getMockData from '../assets/mockApi';
import { globalFormat } from '../dataFormat';
import { useParams, useNavigate } from 'react-router-dom';

const USER_URL = 'http://localhost:3000/user/';
const ACTIVITY_URL = '/activity';
const AVERAGE_SESSIONS_URL = '/average-sessions';
const PERFORMANCE_URL = '/performance';

/**
 * Retrieve user information
 * @param {Array<Object>} user id
 * @returns {Array<Object>} user information
 */
const getUserInformation = async (id) => {
  const user = await axios.get(`${USER_URL}${id}`);
  const activity = await axios.get(`${USER_URL}${id}${ACTIVITY_URL}`);
  const averageSessions = await axios.get(`${USER_URL}${id}${AVERAGE_SESSIONS_URL}`);
  const performance = await axios.get(`${USER_URL}${id}${PERFORMANCE_URL}`);

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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dataSource, setDataSource] = useState('API');

  const handleDataSourceChange = (isChecked) => {
    setDataSource(isChecked ? 'Mock Data' : 'API');
  };

  useEffect(() => {

    console.log(dataSource);

    setLoading(true);

    if (dataSource === 'Mock Data') {
      const mockData = getMockData(parseInt(id, 10));
      console.log('Using Mock Data');
      const formattedMockData = globalFormat(mockData);
      setData(formattedMockData);
    } else if (dataSource === 'API') {
      getUserInformation(id)
        .then((userInformation) => {
          const formatApi = formatApiResponse(userInformation);
          const formattedData = globalFormat(formatApi);
          setData(formattedData);
          console.log('Using APi Data');
        })
        .catch((e) => {
          if (e.code === 'ERR_NETWORK') {
            const mockData = getMockData(parseInt(id, 10));
            if (mockData) {
              setDataSource('Mock Data');
              console.log('Using Mock Data');
              const formattedMockData = globalFormat(mockData);
              setData(formattedMockData);
            } else {
              setError(e);
            }
          } else {
            setError(e);
          }
        });
    } else {
      const error = new Error('No data source selected');
      setError(error);
    }

    setLoading(false);
    
  }, [dataSource]);

  return { data, loading, error, dataSource, handleDataSourceChange };
}

import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchAllEnrollments = async () => {
    const { data } = await axios.get(ENROLLMENTS_API);
    return data;
  };

export const enrollUser = async (courseId: string, userId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/enroll/${courseId}`, {userId: userId});
    return response.data;
};

export const unenrollUser = async (courseId: string, userId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/unenroll/${courseId}/${userId}`);
    return response.data;
};

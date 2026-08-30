const API_BASE = '/api/auth';

const parseResponse = async (response) => {
  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || response.statusText || 'Authentication failed');
  }

  return data;
};

export const signup = async ({ name, email, password }) => {
  const response = await fetch(`${API_BASE}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  return parseResponse(response);
};

export const signin = async ({ email, password }) => {
  const response = await fetch(`${API_BASE}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return parseResponse(response);
};

export const me = async (token) => {
  const response = await fetch(`${API_BASE}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return parseResponse(response);
};

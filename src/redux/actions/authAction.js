export function loginWithPasswordRequest(data,updateStatus) {
    console.log('loginRequest actions');
  
    return {
      type: '@auth/LOGIN',
      payload: {data, updateStatus},
    };
}
  
  
  
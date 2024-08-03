import { del, get, patch, post, postForm, patchForm, put } from "./api";

//01Fund

//authenitacation
export const getOtp = (data) => post("/user/otp/verify", data);
export const userRegistration = (data) => post("/user/register", data);
export const userLogin = (data) => post("/user/login", data);
export const forgotPassword = (data) => post("/user/forgot-password", data);
export const fetchProfile = (data) => get("/user/get-user", data);

export const getUserProfile = (data) => postForm("/user", data);
export const updateUserProfile = (data) => patchForm("/user", data);
export const userChangePassword = (data) => patch("/user/change-password", data);
export const adminChangeEmail = (data) => post("/user/change-mail", data);


export const fetchAllUsers = (data) => get('/admin/users', data);
export const delUser = (data) => del('/admin/user/delete', data);
export const delMultipleUsers = (data) => del('/admin/user/delete/multiple', data);

export const changeUserStatus = (data) => post('/admin/user/status', data);

export const fetchUserSubscription = (data) => get('/subscription/user-list', data);

export const fetchSellerDelivery = (data) => get('/user/delivery/list', data);
export const fetchSellerDeliveryDetail = (data) => get('/user/delivery/details', data);


// package admin
export const fetchAllPackages = (data) => get('/package', data);
export const addPackage = (data) => post('/package/add', data);
export const updatePackage = (data) => post('/package/update', data);
export const delPackage = (data) => del('/package/delete', data);
export const changePackageStatus = (data) => post('/package/change-status', data);

export const fetchDivision = (data) => get('/address/division', data);
export const fetchDistrict = (data) => get('/address/district', data);
export const fetchDestination = (data) => get('/user/destinations', data)

export const createDelivery = (data) => post('/user/delivery/create', data);
export const updateDelivery = (data) => post('/user/delivery/update', data);

export const fetchAdminDeliveryList = (data) => get('/admin/delivery', data);
export const fetchAdminDeliveryDetails = (data) => get('/admin/delivery/details', data);
export const updateDeliveryStatus = (data) => post('/admin/delivery/change-status', data);
export const delAdminDelivery = (data) => del('/admin/delivery/delete', data);

export const postAssignRider = (data) => post('/admin/delivery/assign-rider', data);
export const postDropRider = (data) => post('/admin/delivery/drop-rider', data);


export const fetchRider = (data) => get('/admin/rider/list', data);
export const addRider = (data) => post('/admin/rider/add', data);
export const delRider = (data) => del('/admin/rider', data);

export const riderDeliveryList = (data) => get('/rider/delivery', data);
export const riderDropDeliveryList = (data) => get('/rider/drop/delivery', data);
export const riderDeliveryStatus = (data) => post('/rider/delivery/change-status', data);

// admin destination
export const fetchAdminDestination = (data) => get('/admin/destination/list', data);
export const addAdminDestination = (data) => post('/admin/destination', data);
export const updateAdminDestination = (data) => post('/admin/destination', data);
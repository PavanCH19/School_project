import React, { useState } from 'react';
import { BiCog, BiUser, BiEnvelope, BiPhone, BiLock, BiBuilding, BiTime, BiNotification } from 'react-icons/bi';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    // Sample profile data
    const profileData = {
        name: 'Dr. Rajesh Kumar',
        email: 'principal@school.com',
        phone: '+91 98765 43210',
        qualification: 'Ph.D. in Education Management',
        experience: '15 years',
        joiningDate: '2020-03-15'
    };

    // Sample school settings
    const schoolSettings = {
        name: 'Modern Public School',
        address: '123 Education Street, Knowledge Park',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        phone: '+91 80 2345 6789',
        email: 'info@school.com',
        website: 'www.school.com'
    };

    // Sample notification settings
    const [notificationSettings, setNotificationSettings] = useState({
        emailNotifications: true,
        smsNotifications: true,
        attendanceAlerts: true,
        feeReminders: true,
        examResults: true,
        staffUpdates: true
    });

    // Sample system preferences
    const [systemPreferences, setSystemPreferences] = useState({
        language: 'English',
        timezone: 'Asia/Kolkata',
        dateFormat: 'DD/MM/YYYY',
        theme: 'light',
        sessionTimeout: '30'
    });

    const handleNotificationChange = (setting) => {
        setNotificationSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleSystemPreferenceChange = (e) => {
        const { name, value } = e.target;
        setSystemPreferences(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="container-fluid p-4">
            {/* Page Header */}
            <div className="mb-4">
                <h2 className="mb-1">Settings</h2>
                <p className="text-muted mb-0">Manage your profile and system preferences</p>
            </div>

            <div className="row">
                {/* Settings Navigation */}
                <div className="col-md-3 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="list-group list-group-flush">
                            <button
                                className={`list-group-item list-group-item-action d-flex align-items-center gap-2 ${activeTab === 'profile' ? 'active' : ''}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                <BiUser /> Profile Settings
                            </button>
                            <button
                                className={`list-group-item list-group-item-action d-flex align-items-center gap-2 ${activeTab === 'school' ? 'active' : ''}`}
                                onClick={() => setActiveTab('school')}
                            >
                                <BiBuilding /> School Information
                            </button>
                            <button
                                className={`list-group-item list-group-item-action d-flex align-items-center gap-2 ${activeTab === 'notifications' ? 'active' : ''}`}
                                onClick={() => setActiveTab('notifications')}
                            >
                                <BiNotification /> Notifications
                            </button>
                            <button
                                className={`list-group-item list-group-item-action d-flex align-items-center gap-2 ${activeTab === 'system' ? 'active' : ''}`}
                                onClick={() => setActiveTab('system')}
                            >
                                <BiCog /> System Preferences
                            </button>
                        </div>
                    </div>
                </div>

                {/* Settings Content */}
                <div className="col-md-9">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            {/* Profile Settings */}
                            {activeTab === 'profile' && (
                                <div>
                                    <h5 className="mb-4">Profile Settings</h5>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={profileData.name}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    defaultValue={profileData.email}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Phone</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    defaultValue={profileData.phone}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Qualification</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={profileData.qualification}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Experience</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={profileData.experience}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Joining Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    defaultValue={profileData.joiningDate}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* School Information */}
                            {activeTab === 'school' && (
                                <div>
                                    <h5 className="mb-4">School Information</h5>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">School Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={schoolSettings.name}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Address</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    defaultValue={schoolSettings.address}
                                                ></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">City</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={schoolSettings.city}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">State</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={schoolSettings.state}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">PIN Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={schoolSettings.pincode}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Contact Number</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    defaultValue={schoolSettings.phone}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary">Update Information</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Notification Settings */}
                            {activeTab === 'notifications' && (
                                <div>
                                    <h5 className="mb-4">Notification Preferences</h5>
                                    <div className="row g-4">
                                        {Object.entries(notificationSettings).map(([key, value]) => (
                                            <div key={key} className="col-md-6">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id={key}
                                                        checked={value}
                                                        onChange={() => handleNotificationChange(key)}
                                                    />
                                                    <label className="form-check-label" htmlFor={key}>
                                                        {key.split(/(?=[A-Z])/).join(' ')}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col-12 mt-4">
                                            <button className="btn btn-primary">Save Preferences</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* System Preferences */}
                            {activeTab === 'system' && (
                                <div>
                                    <h5 className="mb-4">System Preferences</h5>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Language</label>
                                                <select
                                                    className="form-select"
                                                    name="language"
                                                    value={systemPreferences.language}
                                                    onChange={handleSystemPreferenceChange}
                                                >
                                                    <option value="English">English</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="Kannada">Kannada</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Time Zone</label>
                                                <select
                                                    className="form-select"
                                                    name="timezone"
                                                    value={systemPreferences.timezone}
                                                    onChange={handleSystemPreferenceChange}
                                                >
                                                    <option value="Asia/Kolkata">India (GMT +5:30)</option>
                                                    <option value="UTC">UTC</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Date Format</label>
                                                <select
                                                    className="form-select"
                                                    name="dateFormat"
                                                    value={systemPreferences.dateFormat}
                                                    onChange={handleSystemPreferenceChange}
                                                >
                                                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Theme</label>
                                                <select
                                                    className="form-select"
                                                    name="theme"
                                                    value={systemPreferences.theme}
                                                    onChange={handleSystemPreferenceChange}
                                                >
                                                    <option value="light">Light</option>
                                                    <option value="dark">Dark</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary">Apply Changes</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS */}
            <style>
                {`
                    .card {
                        transition: transform 0.2s ease;
                    }
                    .list-group-item {
                        border: none;
                        padding: 1rem 1.5rem;
                    }
                    .list-group-item.active {
                        background-color: var(--bs-primary);
                        border-color: var(--bs-primary);
                    }
                    .form-switch .form-check-input {
                        width: 3em;
                    }
                    .form-check-input:checked {
                        background-color: var(--bs-primary);
                        border-color: var(--bs-primary);
                    }
                `}
            </style>
        </div>
    );
};

export default Settings; 
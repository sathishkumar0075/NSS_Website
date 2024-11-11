import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField, MenuItem, Select, InputLabel, FormControl, Radio, RadioGroup, FormControlLabel, Button, Box, Typography } from '@mui/material';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    registerNo: '',
    branch: '',
    yearOfStudy: '',
    dob: '',
    gender: '',
    bloodGroup: '',
    email: '',
    mobile: '',
    aadharNo: '',
    password: '',
  });
  const navigate = useNavigate();


  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Registration successful:', result);
      navigate('/login');
      // You can also reset the form or redirect the user here
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3, backgroundColor: '#FFE3EC' }}>
      <Box sx={{ width: '100%', maxWidth: 600, backgroundColor: 'white', p: 4, borderRadius: 5, boxShadow: 3 }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: '#FF4D94' }}>
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF4D94',
                },
                '&:hover fieldset': {
                  borderColor: '#FF4D94',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4D94',
                },
              },
            }}
          />

          {/* Register No Field */}
          <TextField
            label="Register No"
            variant="outlined"
            fullWidth
            margin="normal"
            name="registerNo"
            value={formData.registerNo}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF4D94',
                },
                '&:hover fieldset': {
                  borderColor: '#FF4D94',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4D94',
                },
              },
            }}
          />

          {/* Branch Field */}
          <TextField
            label="Branch"
            variant="outlined"
            fullWidth
            margin="normal"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF4D94',
                },
                '&:hover fieldset': {
                  borderColor: '#FF4D94',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4D94',
                },
              },
            }}
          />

          {/* Year of Study Select Field */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Year Of Study</InputLabel>
            <Select
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              label="Year Of Study"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#FF4D94',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FF4D94',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF4D94',
                  },
                },
              }}
            >
              <MenuItem value="1">1st Year</MenuItem>
              <MenuItem value="2">2nd Year</MenuItem>
              <MenuItem value="3">3rd Year</MenuItem>
              <MenuItem value="4">4th Year</MenuItem>
            </Select>
          </FormControl>

          {/* DOB Field */}
          <TextField
            label="Date of Birth"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF4D94',
                },
                '&:hover fieldset': {
                  borderColor: '#FF4D94',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4D94',
                },
              },
            }}
          />

          {/* Gender Radio Field */}
          <FormControl component="fieldset" margin="normal">
            <Typography variant="body1">Gender</Typography>
            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>

          {/* Blood Group Select Field */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Blood Group</InputLabel>
            <Select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              label="Blood Group"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#FF4D94',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FF4D94',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF4D94',
                  },
                },
              }}
            >
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
            </Select>
          </FormControl>

          {/* Email Field */}
          <TextField
            label="Email ID"
            variant="outlined"
            type="email"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF4D94',
                },
                '&:hover fieldset': {
                  borderColor: '#FF4D94',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4D94',
                },
              },
            }}
          />

          {/* Mobile Field */}
          <TextField
            label="Mobile"
            variant="outlined"
            type="tel"
            fullWidth
            margin="normal"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF4D94',
                },
                '&:hover fieldset': {
                  borderColor: '#FF4D94',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4D94',
                },
              },
            }}
          />

          {/* Aadhar No Field */}
          <TextField
            label="Aadhar No"
            variant="outlined"
            fullWidth
            margin="normal"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF4D94',
                },
                '&:hover fieldset': {
                  borderColor: '#FF4D94',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4D94',
                },
              },
            }}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF4D94',
                },
                '&:hover fieldset': {
                  borderColor: '#FF4D94',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4D94',
                },
              },
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, backgroundColor: '#FF4D94', '&:hover': { backgroundColor: '#FF1E69' } }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default RegistrationForm;

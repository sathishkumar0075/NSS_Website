import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Button,
  Box,
  Typography,
} from '@mui/material';

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

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validate individual fields
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          error = 'Name can only contain letters and spaces';
        }
        break;
      case 'registerNo':
        if (!value.trim()) {
          error = 'Register No is required';
        }
        // Add more specific validation if needed
        break;
      case 'branch':
        if (!value.trim()) {
          error = 'Branch is required';
        }
        break;
      case 'yearOfStudy':
        if (!value.trim()) {
          error = 'Year of Study is required';
        }
        break;
      case 'dob':
        if (!value) {
          error = 'Date of Birth is required';
        } else {
          const today = new Date();
          const dobDate = new Date(value);
          if (dobDate > today) {
            error = 'Date of Birth cannot be in the future';
          }
        }
        break;
      case 'gender':
        if (!value.trim()) {
          error = 'Gender is required';
        }
        break;
      case 'bloodGroup':
        if (!value.trim()) {
          error = 'Blood Group is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email address is invalid';
        }
        break;
      case 'mobile':
        if (!value.trim()) {
          error = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Mobile number must be 10 digits';
        }
        break;
      case 'aadharNo':
        if (!value.trim()) {
          error = 'Aadhar No is required';
        } else if (!/^\d{12}$/.test(value)) {
          error = 'Aadhar No must be 12 digits';
        }
        break;
      case 'password':
        if (!value.trim()) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters long';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Validate all fields before submission
  const validate = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        newErrors[field] = errors[field];
      }
    });

    return newErrors;
  };

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateField(name, value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const validationErrors = validate();
    if (Object.keys(validationErrors).some((key) => validationErrors[key])) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
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
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          backgroundColor: 'white',
          p: 4,
          borderRadius: 5,
          boxShadow: 3,
        }}
      >
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
            error={!!errors.name}
            helperText={errors.name}
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
            error={!!errors.registerNo}
            helperText={errors.registerNo}
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
            error={!!errors.branch}
            helperText={errors.branch}
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
          <FormControl
            fullWidth
            margin="normal"
            required
            error={!!errors.yearOfStudy}
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
            <InputLabel>Year Of Study</InputLabel>
            <Select
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              label="Year Of Study"
            >
              <MenuItem value="1">1st Year</MenuItem>
              <MenuItem value="2">2nd Year</MenuItem>
              <MenuItem value="3">3rd Year</MenuItem>
              <MenuItem value="4">4th Year</MenuItem>
            </Select>
            {errors.yearOfStudy && <FormHelperText>{errors.yearOfStudy}</FormHelperText>}
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
            required
            error={!!errors.dob}
            helperText={errors.dob}
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
          <FormControl
            component="fieldset"
            margin="normal"
            required
            error={!!errors.gender}
            sx={{
              '& .MuiFormLabel-root.Mui-error': {
                color: '#d32f2f',
              },
            }}
          >
            <Typography variant="body1">Gender</Typography>
            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
          </FormControl>

          {/* Blood Group Select Field */}
          <FormControl
            fullWidth
            margin="normal"
            required
            error={!!errors.bloodGroup}
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
            <InputLabel>Blood Group</InputLabel>
            <Select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              label="Blood Group"
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
            {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
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
            error={!!errors.email}
            helperText={errors.email}
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
            error={!!errors.mobile}
            helperText={errors.mobile}
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
            error={!!errors.aadharNo}
            helperText={errors.aadharNo}
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
            error={!!errors.password}
            helperText={errors.password}
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
            sx={{
              mt: 2,
              backgroundColor: '#FF4D94',
              '&:hover': { backgroundColor: '#FF1E69' },
            }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default RegistrationForm;

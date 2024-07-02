import React, { useEffect, useState } from 'react'
import './Styles/ContactStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios'

function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('subject', subject)
    formData.append('message', message)

    axios.post('http://127.0.0.1:8000/api/storeMessage', formData)
      .then(res => {
        console.log(res)
        setResult(res.data.message)
      })
      .catch(err => {
        console.log(err)
      })
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
  }

  DocumentTitle('Contact');

  return (
    <div className='contact-form content'>
      <div className='d-flex flex-column justify-content-center align-content-center contact-data pb-5'>

        <h2 className='text-uppercase yellow-text text-center pb-4'>Contact</h2>
        {
          result &&
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success</strong> {result}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
        }
        <form class="needs-validation" novalidate>
          <div className='d-flex justify-content-between align-items-center flex-item'>
            <input
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <div class="invalid-feedback">
        Please choose a username.
      </div>

            <input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className='d-flex justify-content-between align-items-center flex-item'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type='text'
              placeholder='Phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className='d-flex align-items-center flex-item'>
            <input
              type='text'
              placeholder='Subject'
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
          </div>
          <div className='d-flex align-items-center flex-item'>
            <textarea
              rows={5}
              placeholder='Message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            >
            </textarea>
          </div>
          <div className='d-flex justify-content-center align-content-center'>
            <button onClick={e => handleFormSubmit(e)} type='submit' className='btn-yellow'>Submit</button>
          </div>
        </form>

      </div>

    </div>

  )
}

export default Contact

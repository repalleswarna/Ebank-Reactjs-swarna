import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #152850;
  height: 100vh;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  height: 70%;
  background-color: #e0eefe;
  border-radius: 25px;
`

export const LoginImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const LoginImage = styled.img`
  width: 90%;
  height: 60%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
  background-color: #ffffff;
  border-radius: 25px;
  padding: 20px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
  color: #152850;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #183b56;
`
export const InputElement = styled.input`
  height: 40px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #5a7184;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #c3cad9;
  padding-left: 10px;
  outline: none;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: #1565d8;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: red;
  text-align: center;
  width: 100%;
`

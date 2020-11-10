import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 35px;
  padding-bottom: 30px;
  width: 50%;
  max-width: 400px;

  display: flex;
  flex-direction: column;

  background: var(--gray-600);
  box-shadow: -1rem 0 3rem #000;
  border-radius: 30px;

  > h3 {
    padding: 20px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 200px;
      object-fit: cover;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

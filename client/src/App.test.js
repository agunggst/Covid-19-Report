import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { fetchCountryAll, fetchCountryDetail } from './store/action';
import { detailPageData, allCountryData } from './testVariable';

jest.mock('./store/action')

beforeAll(() => {

  fetchCountryAll.mockReturnValue({
    type: 'SET_ISLOADING',
    payload: {
      setLoad: false
    }
  }).mockReturnValueOnce({
    type: 'SET_COUNTRYALL',
    payload: {
        data: allCountryData
    }
  })

  fetchCountryDetail.mockReturnValue({
    type: 'SET_ISLOADINGDETAIL',
    payload: {
        setLoad: false
    }
  }).mockReturnValueOnce({
    type: 'SET_COUNTRYDETAIL',
    payload: {
      data: detailPageData
    }
  })

})

describe('Testing Navbar Links, Goto Favourite Page, Home Page, Country Page', () => {
  it('Test NavBar Link to Favourite', () => {
    const { getByTestId } = render(<App/>)
    const linkToFav = getByTestId('linkToFav')
    expect(linkToFav).toBeInTheDocument()

    fireEvent.click(linkToFav)
    const favPageTitle = getByTestId('favPageTitle')
    expect(favPageTitle).toBeInTheDocument()
  })

  it('Test NavBar Link to Country', () => {
    const { getByTestId } = render(<App/>)
    const linkToCountries = getByTestId('linkToCountries')
    expect(linkToCountries).toBeInTheDocument()

    fireEvent.click(linkToCountries)
    const countryPageTitle = getByTestId('countryPageTitle')
    expect(countryPageTitle).toBeInTheDocument()
  })

  it('Test NavBar Link to Global', () => {
    const { getByTestId } = render(<App/>)
    const linkToGlobal = getByTestId('linkToGlobal')
    expect(linkToGlobal).toBeInTheDocument()

    fireEvent.click(linkToGlobal)
    const globalPageTitle = getByTestId('homePageTitle')
    expect(globalPageTitle).toBeInTheDocument()
  })
})

describe('Testing Home Page', () => {
  it('Test Render Home Page Title', () => {
    const { getByTestId } = render(<App/>)
    const homePageTitle = getByTestId('homePageTitle')
    expect(homePageTitle).toBeInTheDocument()
  })

  it('Test Render Global Summary Card', () => {
    const { getByTestId } = render(<App/>)
    const globalCard = getByTestId('cardCLick')
    expect(globalCard).toBeInTheDocument()
  })

  it('Test Click Global Summary Card', () => {
    const { getByTestId } = render(<App/>)
    const globalCard = getByTestId('cardCLick')
    expect(globalCard).toBeInTheDocument()
  })
})

describe('Testing Country Page and Go To Detail Page', () => {
  it('Test Render Country Page Title', () => {
    const { getByTestId } = render(<App/>)
    const linkToCountries = getByTestId('linkToCountries')
    fireEvent.click(linkToCountries)
    const countryPageTitle = getByTestId('countryPageTitle')
    expect(countryPageTitle).toBeInTheDocument()
  })

  it('Test Render Detail Page Title', () => {
    const { getByTestId } = render(<App/>)
    const detailCard = getByTestId('cardCLick')
    fireEvent.click(detailCard)
    const detailPageTitle = getByTestId('detailPageTitle')
    expect(detailPageTitle).toBeInTheDocument()
  })
})

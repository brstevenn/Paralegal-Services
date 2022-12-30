import React, { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useQueryParams() {

	const [queries, setQueries] = useState()

	const { search } = useLocation();

	const onDecodeParams = useCallback((params) => {
		const replaceFirstCharacter = params.replace('?', '');
		const splitString = replaceFirstCharacter.split('&');

		let objQuery = []

		splitString.forEach(query => {
			const [key, value] = query.split('=')
			objQuery.push({key, value})
		})

		setQueries(objQuery)

	},[])

  	useEffect(() => {
    	if(search.trim()){
    		onDecodeParams(search)
    	}
  	}, [onDecodeParams, search])

  	return queries

}
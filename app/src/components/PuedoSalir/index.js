
import React, {useState, useEffect} from "react";
import { useSubspace } from "@embarklabs/subspace-react";
import { scan } from 'rxjs/operators';
import { Grid } from '@material-ui/core';

// import Form from './Form';
import Face from '../Face';
import Message from '../Message';
import MessageHistory from '../MessageHistory'
import { abi, contractAddress } from '../../web3/puedoSalir';

const PuedoSalir = () => {
  const subspace = useSubspace();
  const [puedoSalirContract, setPuedoSalirContract] = useState();
  const [messageObservable$, setMessagesObservable] = useState();
  const [statusObservable$, setStatusObservable] = useState({status: false});

  useEffect(() => {
    setPuedoSalirContract(subspace.contract({abi, address: contractAddress}));
  }, [subspace]);

  useEffect(() => {
    if (!puedoSalirContract) return;
    const observableM = puedoSalirContract.events.NewMessage.track({filter: {}, fromBlock: 7604005})
                                                        .pipe(scan((accum, val) => [...accum, val], []));
    const observableS = puedoSalirContract.events.NewStatus.track({filter: {}, fromBlock: 7604005})       
    setStatusObservable(observableS);
    setMessagesObservable(observableM);
  }, [subspace, puedoSalirContract]);

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    spacing={2}
  >
    <Grid item>
      <Face isHappy={statusObservable$.status}/>
    </Grid>
    <Grid item>
      <Message status={statusObservable$.status} />
    </Grid>
    
    <Grid item>
      <MessageHistory messages={messageObservable$}/>
    </Grid>
  </Grid>
  );
}

export default PuedoSalir;


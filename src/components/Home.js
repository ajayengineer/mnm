import React from 'react'
import TreeMenu from './TreeMenu';
import TreeSearch from './TreeSearch';
import GoSubmitForm from './GoSubmitForm';
import GoUpdateForm from './GoUpdateForm';

function Home() {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <TreeSearch />
                    <TreeMenu />
                </div>
                <div className='col-md-6'>
                    <div className='col-md-12'>
                        <GoSubmitForm />
                    </div>
                    <div className='col-md-12'>
                        <GoUpdateForm />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
import React from 'react';

function Home() {
    return(
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <textarea class="form-control" rows="5">Task 1</textarea>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <textarea class="form-control" rows="5">Task 2</textarea>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <textarea class="form-control" rows="5">Task 3</textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
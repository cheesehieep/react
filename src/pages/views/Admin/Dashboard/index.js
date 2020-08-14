import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Dashboard = ({categories, products, types, posts}) => {
    return (
        <div>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Categories</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{categories.length}</div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Products</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{products.length}</div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Types</div>
                        <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{types.length}</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Pending Requests Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Posts</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{posts.length}</div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreList from '../../Components/Store/StoreList';
import Store from '../../Components/Store/Store';
import { Link } from 'react-router-dom';
import { actFetchStoresRequest, actDeleteStoresRequest, actSearchStoreRequest } from '../../Actions/actStore';

class StoreListPage extends Component {
    
    showstores(stores) {
        if (stores.length > 0) {
            return stores.map((store, index) => {
                return (
                    <Store
                        key={index}
                        store={store}
                        index={index}
                        //truyền props vào store
                        onDelete1={(store_id) => this.onDelete(store_id)}
                    />
                );
            });
        }
    }
    componentDidMount() {
        this.props.fetchAllStores();
    }
    //Ham goi API và xóa store
    onDelete = (store_id) => {
        this.props.onDeleteStore(store_id);
    }

    isChange = (event) => {
        const value = event.target.value;
        if(value){
            this.props.onsearch(value);
        }else{
            this.props.fetchAllStores();
        }
    };

    render() {
        var { stores } = this.props;
        return (
            <div>
                <div className="wrapper">
                    <div className="wrapper">
                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    Danh Sách Store
                                </h1>
                            </section>
                            <section className="content">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <br />
                                            <Link to="/store/add" className="btn btn-info">
                                                Thêm Store
                                            </Link>
                                            <div className="btn-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(event) => this.isChange(event)}
                                                    placeholder="Nhập từ khóa"
                                                />                                        
                                            </div>
                                           
                                            <StoreList>
                                                {this.showstores(stores)}
                                            </StoreList>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Lay store tu store
const mapStateToProps = (state) => {
    return {
        stores: state.stores.stores
    }
};
// Luu stores len store
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllStores: () => {
            dispatch(actFetchStoresRequest());
        },
        onDeleteStore: (store_id) => {
            dispatch(actDeleteStoresRequest(store_id));
        },
        onsearch: (textSearch) => {
            dispatch(actSearchStoreRequest(textSearch));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreListPage);
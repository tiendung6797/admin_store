import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { actAddStoreRequest, actGetStoreRequest, actUpdateStoreRequest } from './../../Actions/actStore';
import { connect } from 'react-redux'; 

class StoreActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store_id: '',
            txtEmail: '',
            txtPassWord: '',
            txtStoreOwnerName: '',
            txtStoreName: '',
            txtAddress: '',
            txtPhone: '',
            txtBankName: '',
            txtBankId: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    //edit, hiện thị dữ liệu của Store cần chỉnh sửa
    componentDidMount() {
        var { match } = this.props;

        if (match) {
            var store_id = match.params.id;
            this.props.onEditStore(store_id);
        }

       
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.itemEditing !== this.props.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                store_id: itemEditing.store_id,
                txtEmail: itemEditing.email,
                txtPassWord: itemEditing.password,
                txtStoreOwnerName: itemEditing.storeowner_name,
                txtStoreName: itemEditing.store_name,
                txtAddress: itemEditing.address,
                txtPhone: itemEditing.phone,
                txtBankName: itemEditing.bank_name,
                txtBankId: itemEditing.bank_id,
            });
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.itemEditing !== state.itemEditing) {
    //         return {
    //             //this.setState({
    //                 store_id: props.itemEditing.store_id,
    //                 txtEmail: props.itemEditing.email,
    //                 txtPassWord: props.itemEditing.password,
    //                 txtStoreOwnerName: props.itemEditing.storeowner_name,
    //                 txtStoreName: props.itemEditing.store_name,
    //                 txtAddress: props.itemEditing.address,
    //                 txtPhone: props.itemEditing.phone,
    //                 txtBankName: props.itemEditing.bank_name,
    //                 txtBankId: props.itemEditing.bank_id
    //            // });
    //         };
            
            
            
    //     }
    //     return null;
    // }

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        //chong load lai trang
        e.preventDefault();

        var { store_id, txtEmail, txtPassWord, txtStoreOwnerName, txtStoreName, txtAddress, txtPhone, txtBankName, txtBankId } = this.state;
        var { history } = this.props;
        var store = {
            store_id: store_id,
            email: txtEmail,
            password: txtPassWord,
            storeowner_name: txtStoreOwnerName,
            store_name: txtStoreName,
            address: txtAddress,
            phone: txtPhone,
            bank_name: txtBankName,
            bank_id: txtBankId
        };
        //cập nhật
        if (store_id) {
            this.props.onUpdateStore(store);
            history.goBack();
        //thêm mới
        } else {
            this.props.onAddStore(store);
            history.goBack();
        }
    }

    render() {   
        var { txtEmail, txtPassWord, txtStoreOwnerName, txtStoreName, txtAddress, txtPhone, txtBankName, txtBankId } = this.state;
        
        return (
            <div>
                <div className="wrapper">
                    <div className="wrapper">
                        <div className="content-wrapper">                         
                            <section className="content">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <form onSubmit={this.onSave}>
                                                    <div className="form-group">
                                                        <label>Email: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtEmail"
                                                            value={txtEmail || ''}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>PassWord: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtPassWord"
                                                            value={txtPassWord || ''}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Store Owner Name: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtStoreOwnerName"
                                                            value={txtStoreOwnerName || ''}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Store Name: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtStoreName"
                                                            value={txtStoreName || ''}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div><div className="form-group">
                                                        <label>Address: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtAddress"
                                                            value={txtAddress || ''}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone: </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="txtPhone"
                                                            value={txtPhone || ''}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div><div className="form-group">
                                                        <label>Bank Name: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtBankName"
                                                            value={txtBankName || ''}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Bank ID: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtBankId"
                                                            value={txtBankId || ''}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    {/* <Link to="/store-list" className="btn btn-danger mr-10"  >
                                                        Trở lại
                                                    </Link> */}
                                                    <button type="submit" className="btn btn-primary"  >
                                                        Lưu lại
                                                    </button>
                                                </form>
                                            </div>
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

const mapStateToProps = state => {
    return {       
        itemEditing: state.stores.store
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddStore: (store) => {
            dispatch(actAddStoreRequest(store));
        },
        onEditStore: (store_id) => {
            dispatch(actGetStoreRequest(store_id));
        },
        onUpdateStore: (store) => {
            dispatch(actUpdateStoreRequest(store));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreActionPage);

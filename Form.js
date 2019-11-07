import React, {Component} from 'react';

class Form extends Component{
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">𝗜𝗱</label>
                        <input type="email" className="form-control" placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝐼𝑑" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">𝗡𝗮𝗺𝗲</label>
                        <input type="password" className="form-control" placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝑁𝑎𝑚𝑒" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">𝗔𝗱𝗱𝗿𝗲𝘀𝘀</label>
                        <input type="password" className="form-control" placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝐴𝑑𝑑𝑟𝑒𝑠𝑠" />
                    </div>
                    <button type="submit" className="btn btn-outline-warning">𝗦𝘂𝗯𝗺𝗶𝘁</button>
                    <a href="Home" class="btn btn-outline-warning" role="button" aria-pressed="true">𝐁𝐚𝐜𝐤</a>
                </form>

            </div>
        )
    }
}
export default Form;

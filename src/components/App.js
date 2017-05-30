import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({params}) => (
  <section className="todoapp">
  	<AddTodo />
			
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <Footer />
  </section>
)

export default App
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import TodoItem from '../components/TodoItem'; 
import { globalStyles } from '../styles/globalStyles'; 

const HomeScreen = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <View style={globalStyles.container}> 
      <Text style={globalStyles.titleText}>Todo App</Text> 
      
      
      <TextInput
        style={globalStyles.input} 
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Add a todo..."
      />
      <TouchableOpacity style={globalStyles.addButton} onPress={handleAddTodo}>
        <Text style={globalStyles.addButtonText}>Add Todo</Text>
      </TouchableOpacity>

     
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <TodoItem todoText={item} onDelete={() => handleDeleteTodo(index)} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles'; 

interface TodoItemProps {
  todoText: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todoText, onDelete }) => {
  return (
    <View style={globalStyles.todoContainer}>
      <Text style={globalStyles.todoText}>{todoText}</Text>
      <TouchableOpacity style={globalStyles.deleteButton} onPress={onDelete}>
        <Text style={globalStyles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

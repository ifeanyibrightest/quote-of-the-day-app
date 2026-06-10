import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerforindex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#121212',
    },

    containerinfavorites: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 20,
    },

    indextitle: {
        fontSize: 28,
        fontWeight: 'bold', 
        marginBottom: 30,
        textAlign:'center', 
        color: '#fff'
    },

    favoritestitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },

    indexquoteCard: {
        width: 350, 
        padding: 25, 
        backgroundColor: '#1A1A1A', 
        borderRadius: 12,
        marginBottom: 30, 
        minHeight: 220, 
        justifyContent:'center',
    },

    favoritesquoteCard: {
        backgroundColor: '#1A1A1A',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
        borderRadius: 12,
    },

    indexquoteText: { 
        fontSize: 18, 
        color: '#fff', 
        textAlign: 'center', 
        lineHeight: 26, 
        fontStyle: 'italic' 
    },

    favoritesquoteText: {
        fontSize: 17,
        color: '#fff',
        lineHeight: 24,
        fontStyle: 'italic',
        marginBottom: 12,
    },

    authorText: { 
        fontSize: 16, 
        color: '#aaa', 
        textAlign: 'center', 
        marginTop: 15 
    },

    removeButton: {
        backgroundColor: '#f44336',
        paddingVertical: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignSelf:'center',
        flexDirection: 'row',
        width:350,
        margin:10,
    },

    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    emptyText: { 
        fontSize: 20, 
        color: '#fff', 
        marginBottom: 10 
    },

    emptySubText: { 
        fontSize: 16, 
        color: '#888', 
        textAlign: 'center' 
    },

    listContent: { 
        paddingBottom: 100 
    },
    
    buttonContainer: { 
        gap: 12,
        width:350
    },
    
    newQuoteButton: { 
        backgroundColor: '#4CAF50', 
        paddingVertical: 15, 
        borderRadius: 8,
        width:350,
    },

    saveButton: { 
        backgroundColor: '#FF9800', 
        paddingVertical: 15, 
        borderRadius: 8,
        width:350,
    },

    savedButton: { 
        backgroundColor: '#4CAF50' 
    },

    buttonText: { 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold', 
        textAlign: 'center' 
    },

    saveButtonText: { 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold', 
        textAlign: 'center' 
    },
    
    shareButton:{
    justifyContent: 'center',
    alignSelf:'center',
    flexDirection: 'row',
    backgroundColor: '#4CAF50', 
    paddingVertical: 15, 
    borderRadius: 8, 
    width:350
  },

  designforclippy:{
    textAlign:'right',
    justifyContent:'flex-end',
    marginTop:'auto'
  }
});
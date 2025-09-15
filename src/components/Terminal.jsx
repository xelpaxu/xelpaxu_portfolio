import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaMinus, FaSquare } from 'react-icons/fa';
import { VscTerminal } from 'react-icons/vsc';

const Terminal = ({ isOpen, onClose, setActiveFile }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'info', content: 'Welcome to VS Code Terminal' },
    { type: 'info', content: 'Type "help" for available commands' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Draggable + Resizable
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 800, height: 300 });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(null);

  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const dragStart = useRef({ x: 0, y: 0, w: 0, h: 0, px: 0, py: 0 });

  const currentPath = '~/xelpaxu-portfolio';

  const fileSystem = {
    'home.jsx': 'home.jsx',
    'projects.html': 'projects.html',
    'contact.css': 'contact.css',
    'skills.js': 'skills.js',
    'github.md': 'github.md'
  };

  const commands = {
    help: () => [
      { type: 'success', content: 'Available commands:' },
      { type: 'info', content: '  ls                 - List files' },
      { type: 'info', content: '  open <filename>    - Open file in editor' },
      { type: 'info', content: '  cls                - Clear terminal' },
      { type: 'info', content: '  pwd                - Show current directory' },
      { type: 'info', content: '  help               - Show this help message' }
    ],

    ls: () => [
      { type: 'success', content: 'Files in current directory:' },
      ...Object.keys(fileSystem).map(file => ({ type: 'file', content: `  ${file}` }))
    ],

    pwd: () => [{ type: 'info', content: currentPath }],

    cls: () => {
      setHistory([]);
      return [];
    }
  };

    const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    const [command, ...args] = trimmedCmd.split(' ');
    const newHistoryItem = { type: 'command', content: `${currentPath}$ ${trimmedCmd}` };

    if (!trimmedCmd) {
        setHistory(prev => [...prev, newHistoryItem]);
        return;
    }

    if (command === 'gf.ily') {
        setHistory(prev => [
        ...prev,
        newHistoryItem,
        { type: 'success', content: "i   ♥   kokol" }
        ]);
        return;
    }

    if (command === 'open') {
        const filename = args.join(' ');
        if (fileSystem[filename]) {
        setActiveFile(fileSystem[filename]);
        setHistory(prev => [
            ...prev,
            newHistoryItem,
            { type: 'success', content: `Opening ${filename} in editor...` }
        ]);
        } else {
        setHistory(prev => [
            ...prev,
            newHistoryItem,
            { type: 'error', content: `File not found: ${filename}` },
            { type: 'info', content: 'Use "ls" to see available files' }
        ]);
        }
        return;
    }

    if (commands[command]) {
        const response = commands[command]();
        if (command !== 'cls') {
        setHistory(prev => [...prev, newHistoryItem, ...response]);
        }
    } else {
        setHistory(prev => [
        ...prev,
        newHistoryItem,
        { type: 'error', content: `Command not found: ${command}` },
        { type: 'info', content: 'Type "help" for available commands' }
        ]);
    }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      executeCommand(input);
    } else {
      setHistory(prev => [...prev, { type: 'command', content: `${currentPath}$ ` }]);
    }
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  // Drag handlers
  const onMouseDownDrag = (e) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, px: position.x, py: position.y };
  };

  const onMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: dragStart.current.px + (e.clientX - dragStart.current.x),
        y: dragStart.current.py + (e.clientY - dragStart.current.y),
      });
    }
    if (resizing) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;

      let newWidth = dragStart.current.w;
      let newHeight = dragStart.current.h;
      let newX = dragStart.current.px;
      let newY = dragStart.current.py;

      if (resizing.includes("right")) newWidth = Math.max(400, dragStart.current.w + dx);
      if (resizing.includes("bottom")) newHeight = Math.max(200, dragStart.current.h + dy);
      if (resizing.includes("left")) {
        newWidth = Math.max(400, dragStart.current.w - dx);
        newX = dragStart.current.px + dx;
      }
      if (resizing.includes("top")) {
        newHeight = Math.max(200, dragStart.current.h - dy);
        newY = dragStart.current.py + dy;
      }

      setSize({ width: newWidth, height: newHeight });
      setPosition({ x: newX, y: newY });
    }
  };

  const onMouseDownResize = (dir, e) => {
    setResizing(dir);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      w: size.width,
      h: size.height,
      px: position.x,
      py: position.y
    };
  };

  const onMouseUp = () => {
    setDragging(false);
    setResizing(null);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [history]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  });

  if (!isOpen) return null;

  const getContentColor = (type) => {
    switch (type) {
      case 'error': return 'text-red-400';
      case 'success': return 'text-green-400';
      case 'info': return 'text-blue-400';
      case 'file': return 'text-yellow-400';
      case 'command': return 'text-white';
      default: return 'text-gray-300';
    }
  };

  return (
    <div
      className="fixed z-50 shadow-lg border border-[#3c3c3c] bg-[#1e1e1e] rounded-md"
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
      }}
    >
      {/* Terminal Header (Draggable) */}
      <div
        className="flex items-center justify-between bg-[#2d2d30] px-4 py-2 border-b border-[#3c3c3c] rounded-t-md cursor-move select-none"
        onMouseDown={onMouseDownDrag}
      >
        <div className="flex items-center gap-2">
          <VscTerminal className="text-white w-4 h-4" />
          <span className="text-white text-sm font-medium">Terminal</span>
          <span className="text-gray-400 text-sm">bash</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-white p-1" title="Minimize">
            <FaMinus className="w-3 h-3" />
          </button>
          <button className="text-gray-400 hover:text-white p-1" title="Maximize">
            <FaSquare className="w-3 h-3" />
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 p-1"
            title="Close"
          >
            <FaTimes className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="overflow-y-auto p-4 font-mono text-sm bg-[#1e1e1e]"
        style={{ height: size.height - 40 }}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className={`${getContentColor(item.type)} whitespace-pre-wrap`}>
            {item.content}
          </div>
        ))}
        <div className="flex items-center text-white mt-2">
          <span className="text-green-400">{currentPath}</span>
          <span className="text-white ml-1">$</span>
          <div className="flex-1 ml-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                } else {
                  handleKeyDown(e);
                }
              }}
              className="bg-transparent border-none outline-none text-white w-full font-mono"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      {/* Resize Handles */}
      <div className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
        onMouseDown={(e) => onMouseDownResize("top-left", e)} />
      <div className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
        onMouseDown={(e) => onMouseDownResize("top-right", e)} />
      <div className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
        onMouseDown={(e) => onMouseDownResize("bottom-left", e)} />
      <div className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
        onMouseDown={(e) => onMouseDownResize("bottom-right", e)} />

      <div className="absolute top-0 left-0 w-full h-2 cursor-n-resize"
        onMouseDown={(e) => onMouseDownResize("top", e)} />
      <div className="absolute bottom-0 left-0 w-full h-2 cursor-s-resize"
        onMouseDown={(e) => onMouseDownResize("bottom", e)} />
      <div className="absolute top-0 left-0 h-full w-2 cursor-w-resize"
        onMouseDown={(e) => onMouseDownResize("left", e)} />
      <div className="absolute top-0 right-0 h-full w-2 cursor-e-resize"
        onMouseDown={(e) => onMouseDownResize("right", e)} />
    </div>
  );
};

export default Terminal;
